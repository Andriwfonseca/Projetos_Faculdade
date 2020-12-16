<?php
session_start();
unset($_SESSION['Login']);
unset($_SESSION['nome']);
header("Location: ./");