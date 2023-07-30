const { expect } = require("chai");
const myFunction = require("./index");

describe("Verifica se a função retorna o maior tempo de descanso entre as tarefas", () => {
  it("Deve retornar o resultado esperado para determinada entrada", () => {
    const resultado = myFunction([
      "12:15PM-02:00PM",
      "09:00AM-10:00AM",
      "10:30AM-12:00PM",
    ]);

    expect(resultado).to.equal("00:30");
  });

  it("Deve retornar o resultado esperado para determinada entrada", () => {
    const resultado = myFunction([
      "12:15PM-02:00PM",
      "09:00AM-12:11PM",
      "02:02PM-04:00PM",
    ]);

    expect(resultado).to.equal("00:04");
  });

  it("Deve retornar o resultado esperado para determinada entrada", () => {
    const resultado = myFunction([
      "10:00AM-11:30AM",
      "03:00PM-04:15PM",
      "01:45PM-02:30PM",
      "05:00PM-06:15PM",
    ]);

    expect(resultado).to.equal("02:15");
  });

  it("Deve retornar o resultado esperado para determinada entrada", () => {
    const resultado = myFunction([
      "08:00AM-09:15AM",
      "03:30PM-04:15PM",
      "11:00AM-12:00PM",
      "01:30PM-02:45PM",
    ]);

    expect(resultado).to.equal("01:45");
  });

  it("Deve retornar o resultado esperado para determinada entrada", () => {
    const resultado = myFunction([
      "10:30AM-11:45AM",
      "04:30PM-05:00PM",
      "02:00PM-03:15PM",
      "09:00AM-09:45AM",
    ]);

    expect(resultado).to.equal("02:15");
  });

  it("Deve retornar o resultado esperado para determinada entrada", () => {
    const resultado = myFunction([
      "02:30PM-03:45PM",
      "09:00AM-10:15AM",
      "11:30AM-12:45PM",
      "04:00PM-05:30PM",
    ]);

    expect(resultado).to.equal("01:45");
  });

  it("Deve retornar o resultado esperado para determinada entrada", () => {
    const resultado = myFunction([
      "01:00PM-02:15PM",
      "10:00AM-11:15AM",
      "09:30AM-10:00AM",
      "03:30PM-04:45PM",
    ]);

    expect(resultado).to.equal("01:45");
  });

  it("Deve retornar o resultado esperado para determinada entrada", () => {
    const resultado = myFunction([
      "09:00AM-09:45AM",
      "01:30PM-02:00PM",
      "11:30AM-12:45PM",
      "03:00PM-04:15PM",
    ]);

    expect(resultado).to.equal("01:45");
  });
});
