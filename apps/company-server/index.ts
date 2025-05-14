import http from "http";
import { httpClient } from '@alfredots/commons-http-client'

console.log('Teste!')

http.createServer(async (_, res) => {
    const githubPayload = await httpClient.get("https://api.github.com/users/alfredots")

    res.write(JSON.stringify(githubPayload));
    res.end();
})
.listen(4000);