"use client";
import { httpClient } from '@alfredots/commons-http-client'


export default function Page() {
  httpClient
    .get("https://api.github.com/users/alfredots")
    .then(data => console.warn(data))

  return <h1>Hello, World 2!</h1>
}