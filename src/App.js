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

function BoardGroup({ group }) {
    let cards = []
    group.cards.forEach((card) => {
        cards.push(
            <Card key={card.address} address={card.address} new_in={card.new_in} new_out={card.new_out} />
        )
    })
  return (
    <div class="BoardGroup">
        <h2>{group.name}</h2>
        {cards}
    </div>
  );
}

function Card({ address, new_in, new_out }) {
  return (
    <div class="Card">
        <h3>{address}</h3>
        <p>New in: {new_in ? "✔️" : "❌"}</p>
        <p>New out: {new_out ? "✔️" : "❌"}</p>
    </div>
  );
}