import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';

function App() {
  const [json, setJson] = useState('');
  const [csv, setCsv] = useState('');

  async function clear() {
    setJson('');
    setCsv('');
  }

  async function convert() {
    if (json === '') {
      alert("Preencha algum JSON!") //inserção de JSON vazio
      return;
    }

    // console.log(json[0]);
    // console.log(json[json.length - 1]);

    if (json[0] !== '[' && json[json.length - 1] !== ']') {
      // console.log('isNotArray');
      // var inicio = '[';
      // var fim = ']';
      // setJson(inicio.concat(json, fim));
      // console.log(json);
    }

    var jsonArray = JSON.parse(json);
    // console.log(jsonArray);

    var stringCsv = '';
    var colunas = [];
    // console.log(jsonArray.length);
    for (var i = 0; i < jsonArray.length; i++) {
      var linha = '';
      for (var index in jsonArray[i]) {
        if (i === 0)
          colunas.push(index);

        if (linha !== '')
          linha += ';'

        linha += jsonArray[i][index];
      }
      // console.log(colunas);
      stringCsv += linha + '\r\n';
    }

    console.log(colunas.join(';') + '\r\n');
    console.log(stringCsv);

    // stringCsv.unshift(colunas.join(';') + '\r\n') // add header column
    setCsv(colunas.join(';') + '\r\n' + stringCsv);
  }


  return (
    <div className="App">
      <form action="">
        <div class="row">
          <div class="form-outline col-5">
            <textarea class="form-control" id="json" rows="8"
              value={json}
              onChange={(e) => setJson(e.target.value)}>
            </textarea>
            <label class="form-label" for="json">JSON</label>
          </div>

          <div class="col-2">
            <button type="button" class="btn btn-success" onClick={convert}>Converter</button>
            <br />
            <br />
            <button type="button" class="btn btn-secondary" onClick={clear}>Limpar</button>
          </div>

          <div class="form-outline col-5">
            <textarea class="form-control" id="csv" rows="8" disabled="disabled" value={csv}></textarea>
            <label class="form-label" for="csv">CSV</label>
          </div>
        </div>

      </form >
    </div >
  );
}

export default App;
