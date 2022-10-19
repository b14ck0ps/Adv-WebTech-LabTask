<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserEditController extends Controller
{
    public function Index()
    {
        return view('editInfo');
    }

    public function EditUser(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6|confirmed',
        ]);

        User::where('id', session()->get('user')->id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);
        $user = User::where('email', $request->email)->first();
        session()->forget('user');
        session()->put('user', $user);
        return redirect()->to('/profile');
    }
}
