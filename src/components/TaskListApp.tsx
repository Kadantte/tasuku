import React, { type FC } from 'react';
import { TaskList } from 'ink-task-list';
import { useSnapshot } from 'valtio';
import type { TaskObject } from '../types.js';
import TaskListItem from './TaskListItem.js';

const TaskListApp: FC<{
	taskList: TaskObject[];
}> = ({
	taskList,
}) => {
	const state = useSnapshot(taskList);

	return (
		<TaskList>
			{
				state.map((task, index) => (
					<TaskListItem
						key={index}
						task={task}
					/>
				))
			}
		</TaskList>
	);
};

export default TaskListApp;
