<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegistrationController extends Controller
{
    public function Index()
    {
        return view('auth.registration');
    }

    public function RegtisterUser(Request $requst)
    {
        $this->validate($requst, [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6|confirmed',
        ]);

        $user = User::create([
            'name' => $requst->name,
            'email' => $requst->email,
            'password' => $requst->password,
        ]);
        session()->put('user', $user);
        return redirect()->to('/profile');
    }
}
