<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;



class RegisterStep2Controller extends Controller
{
    public function create () {
       return inertia('Auth/RegisterStep2');
    }

    public function store () {

    }
}
