package com.example.vinculacion2.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CustomErrorController implements ErrorController {

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request, Model model) {
        // Aquí puedes agregar la lógica para obtener la información del error y enviarla a la página de error personalizada
        return "error"; // reemplaza "error" con el nombre de tu página de error personalizada
    }


}
