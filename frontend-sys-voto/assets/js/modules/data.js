"use strict"

async function getAllCandidates() {
  try {
    const response = await fetch('http://127.0.0.1:8080/candidato/find-all');
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getAllEleicoes() {
  try {
    const response = await fetch('http://127.0.0.1:8080/eleicao/find-all');
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function vote(candidatoId) {
  try {
    const response = await fetch('http://localhost:8080/eleitor/votar-canditato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ candidatoId: candidatoId })
    })
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

function voteNull(cargo) {
  // console.log("votando nulo para o cargo de: " + cargo)
}

function voteBranco(cargo) {
  // console.log("votando branco para o cargo de: " + cargo)
}

export default {
  getAllEleicoes,
  getAllCandidates,
  vote,
  voteBranco,
  voteNull
}