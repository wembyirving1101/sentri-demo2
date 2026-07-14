from ollama import chat

response = chat(
    model='huihui_ai/qwen3-abliterated',
    messages=[{'role': 'user', 'content': 'hai'}],
)
print(response.message.content)