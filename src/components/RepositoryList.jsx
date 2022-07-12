import { useSate, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.css';

const repository = {
    name: 'unform',
    description: "Form in React" ,
    link: "https://github.com/unform"
}

export function RepositoryList() {
    const [repositories, setRepositories] = useSate([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}