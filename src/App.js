const TX_DATA = [
    {
        "txid": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        "addresses": {
            "input": "0x1234567890abcdef1234567890abcdef12345678",
            "output": "0x0987654321fedcba0987654321fedcba09876543"
        },
        "value": 1000,
        "datetime": "2023-10-01T12:00:00Z",
    },
    {
        "txid": "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        "addresses": {
            "input": "0x1234567890abcdef1234567890abcdef12345678",
            "output": "0xabcdef1234567890abcdef1234567890abcdef12",
        },
        "value": 2000,
        "datetime": "2023-10-02T12:00:00Z",
    }
]

const AD_DATA = [
    {
        "address": "0x1234567890abcdef1234567890abcdef12345678",
        "new_in": false,
        "new_out": true,
        "group": "Binance",
    },
    {
        "address": "0x0987654321fedcba0987654321fedcba09876543",
        "new_in": true,
        "new_out": false,
        "group": "Binance",
    },
    {
        "address": "0xabcdef1234567890abcdef1234567890abcdef12",
        "new_in": true,
        "new_out": false,
        "group": "Coinbase",
    }
]

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
        <table>
            <tbody>
                {rows}
            </tbody>
        </table>
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
    <tr>
        <th>
            {group.name}
        </th>
        {cards}
    </tr>
  );
}

function Card({ address, new_in, new_out }) {
  return (
    <td>
        <td>{address}</td>
        <td>{new_in ? "✔️" : "❌"}</td>
        <td>{new_out ? "✔️" : "❌"}</td>
    </td>
  );
}