## Proxy lokalt mot nav.no

For å unngå cors problemer når man utvikler lokalt, og slippe å starte opp server, anbefales å starte opp en proxy server

Anbefaler å laste ned

```
git clone https://github.com/Rob--W/cors-anywhere/
cd cors-anywhere/
npm install
npm start
```

Dette starter opp en proxyserver lokalt på port 8080. Alle endepunkter kan kontaktes via 
`http://localhost:8080/https://navn.no/osv.osv`

## Proxyserver på codesandbox

På codesandbox kan serveren `cors-anywhere.herokuapp.com` brukes.
