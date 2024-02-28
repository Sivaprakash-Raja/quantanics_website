import fs from 'fs'
import { NextApiRequest,NextApiResponse } from 'next'


export default function handler(req: NextApiRequest,res:NextApiResponse){
  const pdfPath = '/images/about/etap-solutions-overview.pdf';
  const pdfData = fs.readFileSync(pdfPath);
  res.setHeader('Content-Type','application/pdf');
  res.setHeader('Content-Disposition','inline;filename="etap-solutions-overview.pdf"');
  res.status(200).send(pdfData);
}