import path from 'path'
import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const url = new URL(request.url)

  const directory = path.join(process.cwd(), '/src/dummies')
  const result = await fs.readFile(directory + '/buffed.json', 'utf8')
  const parsed = JSON.parse(result)
  const params = url.searchParams.get('type')

  if (params) return NextResponse.json(parsed[params])
  return NextResponse.json(parsed)
}
