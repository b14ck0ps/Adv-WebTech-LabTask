@extends('layouts.app')

@section('content')
    <h1 class=" text-3xl mt-5  text-center">Login</h1>
    <div class="flex justify-center">

        <div class="w-1/3 bg-white p-6 rounded-lg">
            @if ($errors->has('credential'))
                <p class="text-center text-red-700">{{ $errors->first() }}</p>
            @endif
            <form action="{{ route('login') }}" method="post">
                @csrf
                <div class="mb-4">
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" name="email" id="email" placeholder="Your email"
                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg @error('email') border-red-500 @enderror"
                        value="{{ old('email') }}">
                    @error('email')
                        <div class="text-red-500 mt-2 text-sm">
                            {{ $message }}
                        </div>
                    @enderror
                </div>
                <div class="mb-4">
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password"
                        class="bg-gray-100 border-2 w-100 p-4 rounded-lg @error('password') border-red-500 @enderror"
                        value="">
                    @error('password')
                        <div class="text-red-500 mt-2 text-sm">
                            {{ $message }}
                        </div>
                    @enderror
                </div>
                <div>
                    <button type="submit" class="bg-blue-500 text-white px-4 py-3 rounded font-medium w-20">Login</button>
                    <a class="ml-8 text-blue-500" href="registration">Need An Accont?</a>
                </div>
            </form>
        </div>
    </div>
@endsection
