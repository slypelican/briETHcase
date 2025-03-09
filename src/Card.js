export default function Card({ address, new_in, new_out }) {
    return (
      <div class="Card">
          <h3>{address}</h3>
          <p>New in: {new_in ? "✔️" : "❌"}</p>
          <p>New out: {new_out ? "✔️" : "❌"}</p>
      </div>
    );
}