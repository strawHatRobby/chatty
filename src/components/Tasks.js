import React from 'react';

export default function Task({ task: {id, title, state} , onArchiveTask, onPinTask}){
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
        <input 
        type="checkbox"
        defaultChecked={state === "Task_ARCHIVED"}
        disabled={true}
        name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchivTask(id)} />
        </label>
        <div className="title">
            <input type="text" value={title} readOnly={true} placeholder="Input Title"/>
        </div>
            <input type="text" value={title} readOnly={true}/>`
        <div className="actions" onClick={event => event.stopPropgration()}>
        {state !== 'TASK_ARCHIVED' && (
          <a onClick={() => onPinTask(id)}>
                <span className={`icon-star`} />
            </a>
        )}
        </div>
        </div>
    );
}
