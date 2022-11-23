import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { PrivateRoute } from "../../router/PrivateRoute";

describe("Pruebas en <PrivateRoute/>", () => {
  test("debe de mostar el children siesta autenticado", () => {


    Storage.prototype.setItem=jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: "abc",
        name: "Juan carlos",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?q=batman")
  });
});
