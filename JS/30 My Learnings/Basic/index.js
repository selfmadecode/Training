// old way of rendering HTML on the UI
// ReactDOM.render(
// <div>
//     <h1>Header</h1>
//     <p>React</p>
// </div>, document.getElementById("root"));

// Best way
const root = ReactDOM.createRoot(document.getElementById("root")); // creates a root targeting the element
root.render(<div>
    <h1>Header root render</h1>
    <p>React root render</p>
</div>);

const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );

  const container = document.getElementById('roott');
const roott = ReactDOM.createRoot(container);
root.render(myelement);