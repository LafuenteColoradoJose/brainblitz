#!/bin/bash

# Instalar dependencias necesarias
apt-get update
apt-get install -y libssl1.0.2

# Continuar con la construcción de Vercel
vercel build
