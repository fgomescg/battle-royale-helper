import { NextApiRequest, NextApiResponse } from 'next';

export default async function Teste(req, res) {
    res.json(
        {
            "date": Date.now(),
            "nome": "TESTE"            
        }
    )
}