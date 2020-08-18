import React from 'react';


const TodoItem = ({name, completed, onDelete, onToggle })=>{
	return(
		<li>
			<div className={!completed ? "task": "task done"} onClick={onToggle}> {'- '+ name}</div>
			<span onClick={onDelete}>X</span>
		</li>
	)
}

export default TodoItem; 