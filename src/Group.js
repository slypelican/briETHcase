import Card from './Card.js'

export default function BoardGroup({ group }) {
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