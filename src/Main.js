import React from 'react'
import { Configuration, OpenAIApi } from 'openai'
export default function Main() {
    const configuration = new Configuration({
        apiKey: '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',
    })
    const openai = new OpenAIApi(configuration);
    const createCompletion = async () => {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "can you write the code for fibonacci sequence in python",
            temperature: 0,
            max_tokens: 2048,
        })
        console.log(response.data.choices[0].text)
    }
    createCompletion()
    return (
        <div></div>
    )
}