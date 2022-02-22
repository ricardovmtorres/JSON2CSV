import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSolid } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [json, setJson] = useState('');
  const [csv, setCsv] = useState('');
  const [cols, setCols] = useState([]);
  const [linhas, setLinhas] = useState([]);
  const [showTable, setShowTable] = useState(false);

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

    setCols(colunas);
    // console.log(cols)
    var lin = stringCsv.split('\r\n');
    var objs = [];
    lin.forEach(item => {
      objs.push(item.split(";"));
    });
    // console.log(objs);
    setLinhas(objs);
    // console.log(linhas);
  }

  async function mudaTabela() {
    var show = !showTable;
    setShowTable(show);
  }

  async function downloadCsv() {
    var csvFile = csv;
    var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, 'convert.csv');
    } else {
      var link = document.createElement("a");
      if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", 'convert.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
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
            <br />
            <br />
            <button type="button" class="btn btn-info" onClick={mudaTabela} >
              Gerar Tabela
            </button>
          </div>

          <div class="form-outline col-5">
            <textarea class="form-control" id="csv" rows="8" disabled="disabled" value={csv}></textarea>
            <label class="form-label" for="csv">CSV</label>
          </div>
        </div>

      </form >

      <br />
      <br />
      <br />
      {showTable &&
        <div className="Table">
          <button type="button" class="btn btn-info" onClick={downloadCsv} >
            {/* <FontAwesomeIcon icon={faSolid} /> */}
            Donwload .csv
          </button>
          <table style={{ width: '100%' }}>
            <tr>
              {cols.map((coluna, index) => {
                return <th key={index}>{coluna}</th>
              })}
            </tr>
            {linhas.map((linha, index) => {
              return <tr>
                {linha.map((campo, index) => {
                  return <td key={index}>{campo}</td>
                })}
              </tr>
            })}
          </table>
        </div>}
    </div >
  );
}

export default App;
