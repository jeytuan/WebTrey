import asyncio
import websockets
import json

connected_clients = set()

async def register(websocket):
    connected_clients.add(websocket)
    try:
        async for message in websocket:
            data = json.loads(message)
            print(f"Received message from client: {data}")
            # Handle incoming messages if needed
    finally:
        connected_clients.remove(websocket)

async def broadcast(message):
    if connected_clients:
        print(f"Broadcasting message: {message}")
        await asyncio.wait([client.send(message) for client in connected_clients])

async def main():
    async with websockets.serve(register, "localhost", 8765):
        await asyncio.Future()  # Run forever

if __name__ == "__main__":
    asyncio.run(main())
