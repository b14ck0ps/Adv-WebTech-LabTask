@extends('layouts.app')

@section('content')
    <div class="flex flex-col items-center">
        <div class="flex justify-between items-center min-h-screen max-w-4xl">
            <div>
                <img class="h-32  p-1 m-5" src="https://via.placeholder.com/200/09f/fff.png">
            </div>
            <div class="flex flex-col p-10">
                <p class="text-xl">Name: {{ session()->get('user')->name }}</p>
                <p class="text-xl">Email: {{ session()->get('user')->email }}</p>
                <p class="text-xl">Updated: {{ session()->get('user')->updated_at }}</p>
            </div>
            <div class="flex flex-col">
                <a href="{{ route('edit') }}"
                    class="bg-blue-500 text-white px-4 py-3 my-5 rounded font-medium w-50">Update</a>
                <a href="{{ route('logout') }}" class="bg-red-500 text-white px-4 py-3 rounded font-medium w-50">Logout</a>
            </div>
        </div>
    </div>
@endsection
