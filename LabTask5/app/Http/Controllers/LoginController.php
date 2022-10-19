<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function Index()
    {
        return view('auth.login');
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $user = User::where('email', $request->email)->where('password', $request->password)->first();

        if ($user) {
            session()->put('user', $user);
            return redirect()->to('/profile');
        } else {
            return back()->withErrors([
                'credential' => 'Invalid credentials.',
            ]);
        }
    }
}
