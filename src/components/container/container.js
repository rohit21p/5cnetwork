import React from 'react';
import axios from 'axios';

import Filters from '../filters/filters';
import Repos from '../repos/repos';
import Repo from '../repo/repo';
  

export default function Container() {
    
    const [state, setState] = React.useState({
        username: '',
        users: {},
        showingUser: [],
        showingRepo: {},
    });

    const handleChange = (event, prop) => {
        setState({ ...state, [prop]: event.target.value });
    };

    const init = () => {
        if (state.users[state.username]) {
            setState(state => ({
                ...state,
                showingUser: state.users[state.username],
                showingRepo: {},
            }))
            return;
        }
        axios.get(`https://api.github.com/users/${state.username}/repos`)
        .then(res => {
            console.log(res)
            setState(state => ({
                ...state,
                users: {
                    ...state.users,
                    [state.username]: res.data,
                },
                showingUser: res.data,
                showingRepo: {},
            }))
        })
        .catch(err => {
            console.log(err)
            setState(state => ({
                ...state,
                showingUser: [],
                showingRepo: {},
            }))
        })
    }

    const onRepoClick = (repoClicked) => {
        setState(state => ({
            ...state,
            showingRepo: state.users[state.username].find(repo => repo.id === repoClicked),
        }))
    }

    return (
        <div>
            <Filters 
                handleFilterChange={(e, prop) => handleChange(e, prop)} 
                fetchUser={init}
                username={state.username}
            />
            {
                state.showingRepo.id ? 
                <Repo 
                    repo={state.showingRepo}
                    back={() => handleChange({target: {value: {}}}, 'showingRepo')}
                /> :
                <Repos 
                    repos={state.showingUser}
                    onRepoClick={(repo) => onRepoClick(repo)}
                />
            }
        </div>
    );
}