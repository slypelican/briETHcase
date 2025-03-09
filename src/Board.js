import BoardGroup from './Group.js'

export default function WatchBoard({ groups }) {
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