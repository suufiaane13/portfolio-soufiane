# 🚀 Guide de Déploiement Netlify

## 📋 Prérequis

1. **Compte Netlify** : [netlify.com](https://netlify.com)
2. **Compte GitHub** : Pour le repository
3. **Variables d'environnement** : Gmail configuré

## 🔧 Configuration Netlify

### 1. **Créer le Repository GitHub**

```bash
# Initialiser Git
git init
git add .
git commit -m "Initial commit - Portfolio Soufiane HAJJI"

# Créer repository sur GitHub
# Puis connecter :
git remote add origin https://github.com/votre-username/portfolio.git
git push -u origin main
```

### 2. **Déploiement Netlify**

#### **Option A : Déploiement Automatique (Recommandé)**

1. Aller sur [app.netlify.com](https://app.netlify.com)
2. Cliquer **"New site from Git"**
3. Connecter **GitHub**
4. Sélectionner votre repository
5. Configuration automatique :
   - **Build command** : `pnpm build`
   - **Publish directory** : `.next`
   - **Node version** : `18`

#### **Option B : Déploiement Manuel**

```bash
# Build du projet
pnpm build

# Déployer le dossier .next
# Via Netlify CLI ou drag & drop
```

### 3. **Variables d'Environnement**

Dans **Site settings > Environment variables** :

```
GMAIL_USER=votre-email@gmail.com
GMAIL_APP_PASSWORD=votre-mot-de-passe-app
```

### 4. **Configuration Gmail**

1. **Activer l'authentification à 2 facteurs**
2. **Générer un mot de passe d'application** :
   - Google Account > Sécurité
   - Authentification à 2 facteurs
   - Mots de passe des applications
   - Sélectionner "Mail" et "Autre"
   - Copier le mot de passe généré

## 📁 Fichiers de Configuration

### ✅ **netlify.toml** - Configuration principale
```toml
[build]
  command = "pnpm build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
```

### ✅ **_redirects** - Redirections SPA
```
/*    /index.html   200
```

### ✅ **netlify/functions/contact.js** - API Contact
- Fonction serverless pour le formulaire
- Gestion des emails avec Nodemailer
- CORS configuré

## 🎯 Optimisations Incluses

### **Performance :**
- ✅ Cache 1 an pour assets statiques
- ✅ Compression activée
- ✅ Images optimisées
- ✅ PDF CV optimisé

### **SEO :**
- ✅ Sitemap.xml automatique
- ✅ Robots.txt configuré
- ✅ Meta tags optimisés
- ✅ Open Graph complet

### **Sécurité :**
- ✅ Headers de sécurité
- ✅ CORS configuré
- ✅ Validation des données

## 🚀 Déploiement Final

### **1. Push vers GitHub :**
```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

### **2. Netlify détecte automatiquement :**
- ✅ Build command : `pnpm build`
- ✅ Publish directory : `.next`
- ✅ Node version : 18
- ✅ Variables d'environnement

### **3. Vérifications :**
- ✅ Site accessible
- ✅ Formulaire de contact fonctionnel
- ✅ CV téléchargeable
- ✅ Animations GSAP
- ✅ Responsive design

## 🔍 Tests Post-Déploiement

### **Fonctionnalités à tester :**
1. **Navigation** : Tous les liens
2. **Formulaire** : Envoi d'email
3. **CV** : Téléchargement
4. **Responsive** : Mobile/Tablet/Desktop
5. **Animations** : GSAP fluides
6. **Performance** : Vitesse de chargement

### **URLs importantes :**
- **Site principal** : `https://votre-site.netlify.app`
- **Sitemap** : `https://votre-site.netlify.app/sitemap.xml`
- **Robots** : `https://votre-site.netlify.app/robots.txt`
- **CV** : `https://votre-site.netlify.app/CV_Soufiane.pdf`

## 🎉 Félicitations !

Votre portfolio est maintenant déployé sur Netlify avec :
- ⚡ **Performance optimisée**
- 🔍 **SEO complet**
- 📱 **Design responsive**
- ♿ **Accessibilité**
- 🎨 **Animations fluides**
- 📧 **Contact fonctionnel**

**Votre portfolio professionnel est prêt !** 🎯✨
