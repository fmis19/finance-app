<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class AdminController extends Controller
{
    //
    public function getUsers(){
        $response = Gate::inspect('isAdmin');

        if($response->allowed()){
            return response()->json(User::all());
        }
        else{
            return response()->json(["message" => $response->message()]);
        }
        
    }
}
