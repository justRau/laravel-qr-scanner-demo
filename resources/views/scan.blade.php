@extends('layout')

@section('content')
    <video id="qr-scanner"></video>

    <button id="qr-scanner-start">
        Start scanning
    </button>

    <button id="qr-scanner-stop">
        Stop scanning
    </button>

    <div id="qr-scanner-result"></div>
@endsection
