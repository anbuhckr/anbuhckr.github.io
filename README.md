# Chatbot UI

A static web ui chat interface for everyone. base on chatbot-ui

## Backend Example with python

```python
# !/usr/bin/env python3
# python3 -m pip install sanic
# python3 -m pip install sanic[ext]
# python3 -m pip install llama-cpp-python

import json
from llama_cpp import Llama
from sanic import Sanic, response
from sanic.exceptions import NotFound
from sanic_ext import Extend

model_path = 'Meta-Llama-3-8B.gguf'
api_key = 'lF5CoJ4qHS0Vxypea10IDEHBDaizPKwCGv'
error_msg = {'error': {'type': 'error', 'code': 'error', 'param': 'error', 'message': ''}}

app = Sanic('app')
app.config.CORS_ORIGINS = 'https://anbuhckr.github.io'
Extend(app)

@app.listener('before_server_start')
async def server_init(app, loop):
    app.ctx.llm = Llama(model_path=model_path, verbose=False, n_ctx=4096, seed=1)

@app.listener('after_server_stop')
async def cleanup(*args, **kwargs):
    app.ctx.llm.close()

@app.exception(NotFound)
async def ignore_404s(request, exception):
    return await response.json({'erorr': 'not found'})

@app.post('/v1/chat/completions')
async def chat(request):
    if 'key' not in request.json or request.json.get('key') != api_key:
        error_msg['message'] = 'api_key not valid'
        return response.json(error_msg)
    res = await request.respond(content_type='text/plain')
    try:
        prompt = {'role': 'system', 'content': request.json.get('prompt')}
        msg = {'role': 'user', 'content': request.json.get('messages')[-1]['content']}
        output = app.ctx.llm.create_chat_completion(
            messages=[prompt, msg],
            temperature=request.json.get('temperature'),
            stream=True,
        )
        for chunk in output:
            delta = chunk['choices'][0]['delta']
            if 'content' in delta:
                await res.send(delta['content'].encode())
    except Exception as e:
        error_msg['message'] = e
        await res.send(json.dumps(error_msg).encode())
    await res.eof()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=False, access_log=False, auto_reload=True)
```

Add to the ui:

* api key: `lF5CoJ4qHS0Vxypea10IDEHBDaizPKwCGv`
* api host: `http://127.0.0.1:8080/v1/chat/completions`


## Ref

* [chatbot-ui](https://github.com/mckaywrigley/chatbot-ui)
* [chatbot-ui-llama.cpp](https://github.com/yportne13/chatbot-ui-llama.cpp)
