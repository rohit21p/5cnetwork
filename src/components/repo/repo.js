import React from 'react';

export default function Repos(props) {

    const { repo, back } = props;

    return repo && repo.id ? (
        <div className="repo-details-container">
            <button onClick={back}>Back</button>
            <div className="repo-details">
                <div className="repo">
                    <div>
                        <div>
                            <img src={repo.owner.avatar_url} alt="user image" className="repo-image" />
                        </div>
                        <div>Verified by user</div>
                        <div>Github confirms that this app meets requirement for verification</div>
                    </div>
                    <div className="details">
                        <div>Application</div>
                        <div className="repo-name">{repo.name}</div>
                        <div className="repo-desc">{repo.description}</div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}