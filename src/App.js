import BoardGroup from './Group.js'
// Data set FOR TESTING ONLY
import {GROUP_DATA} from './test_data.js'

export default function App() {
    return(<WatchBoard groups={GROUP_DATA} />)
}

function WatchBoard({ groups }) {
    let rows = []
    groups.forEach((group) => {
        rows.push(
            <BoardGroup key={group.name} group={group} />
        )
    })
    return (
        <div class="WatchBoard">
            {rows}
        </div>
    )
}