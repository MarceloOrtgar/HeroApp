import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes,Route,Router } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";

describe("Pruebas en <PublicRoute/>", () => {
  test("debe de mostar el children si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta publica")).toBeTruthy();
  });

  test("debe de navegar si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Strider",
        id: "ABC123",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta publica</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Pagina Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
  });

  expect(screen.getByText('Pagina Marvel')).toBeTruthy()
});
