const GROUP_DATA = [
    {
        "name": "Binance",
        "cards": [
            {
                "address": "0x1234567890abcdef1234567890abcdef12345678",
                "new_in": false,
                "new_out": true,
            },
            {
                "address": "0x0987654321fedcba0987654321fedcba09876543",
                "new_in": true,
                "new_out": false,
            },
        ]
    },
    {
        "name": "Coinbase",
        "cards": [
            {
                "address": "0xabcdef1234567890abcdef1234567890abcdef12",
                "new_in": true,
                "new_out": false,
            },
        ]
    }
]

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