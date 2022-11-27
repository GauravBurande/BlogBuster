import * as fs from 'fs';


export default async function handler (req, res) {
    if ( req.method === 'POST') {
        // process a post request
        // let data = await fs.promises.readdir('./contactdata')
        fs.promises.writeFile(`./contactdata/${req.body.email}.json`, JSON.stringify(req.body))
        res.status(200).send('post done')
    } else {
        // handle any other http method
        res.status(200).json(['allbogs'])
    }
}