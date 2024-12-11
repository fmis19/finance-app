<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // Kreiraj Validator instancu
        $validator = Validator::make($request->all(), [
            "name" => "required|string|max:100",
            "surname" => "required|string|max:150",
            "email" => "required|email|max:100|unique:users,email",
            "password" => "required|string|min:6|confirmed"
        ]);

        // Provjeri je li validacija uspješna
        if ($validator->fails()) {
            // Vrati greške ako validacija ne uspije
            return response()->json([
                "errors" => $validator->errors()
            ], 422);
        }

        // Kreiranje korisnika ako je validacija uspješna
        $user = User::create([
            "name" => $request->name,
            "surname" => $request->surname,
            "email" => $request->email,
            // "email_verified_at" => null,
            "password" => Hash::make($request->password),
            "role" => "user"
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
