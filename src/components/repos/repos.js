import React from 'react';

export default function Repos(props) {

    const { repos, onRepoClick } = props;

    return (
        <div className="repoContainer">
            {
                (repos || []).map(repo => (
                    <div onClick={() => onRepoClick(repo.id)} key={repo.id} className="repo">
                        <img src={repo.owner.avatar_url} alt="user image" className="repo-image" />
                        <div>
                            <div className="repo-name">{repo.name}</div>
                            <div className="repo-desc">{repo.description}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}