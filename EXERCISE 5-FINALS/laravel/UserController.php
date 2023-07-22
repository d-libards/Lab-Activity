<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function showRegistrationForm()
    {
        return view('register');
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'pass' => 'required|min:6',
            'cpass' => 'required|same:pass',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $name = $request->input('name');
        $email = $request->input('email');
        $password = md5($request->input('pass'));

        // Upload and store image
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imagePath = 'uploaded_img/';
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move($imagePath, $imageName);
        }

        $user = new User();
        $user->name = $name;
        $user->email = $email;
        $user->password = $password;
        $user->image = $imageName;
        $user->save();

        return redirect()->route('login')->with('success', 'Registration success! Please login.');
    }
}


?>
