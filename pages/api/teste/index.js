
export default async function Teste(request, response) {
    response.status(200);
    response.json(
        {
            "date": Date.now().toLocaleString(),
            "nome": "TESTE GIT"            
        }
    )
}