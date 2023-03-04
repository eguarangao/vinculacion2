package com.example.vinculacion2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeConroller {
    @GetMapping({"/", "/home", "/index"})
    public String index() {
        return "index";
    }

    @GetMapping("/powerpoint")
    public String powerpoint() {
        return "powerpoint";
    }

    @GetMapping("/word")
    public String word() {
        return "word";
    }

    @GetMapping("/pdf")
    public String pdf() {
        return "pdf";
    }

    @GetMapping("/audiolibros")
    public String audiolibros() {
        return "audiolibros";
    }
    @GetMapping("/nvda")
    public String nvda() {
        return "nvda";
    }

    @GetMapping("/dislexia")
    public String dislexia(){
        return "dislexia";
    }

    @GetMapping("/zoomit")
    public String zoomit() {
        return "zoomit";
    }


}
