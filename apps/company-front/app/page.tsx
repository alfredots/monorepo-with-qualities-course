"use client";
import { httpClient } from '@alfredots/commons-http-client'

export default function Page() {
  httpClient
    .get("https://api.github.com/users/alfredots")
    .then(data => console.log(data))


  return <h1>Hello, World!</h1>
}