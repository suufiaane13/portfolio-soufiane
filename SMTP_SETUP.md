# 📧 Configuration SMTP Gmail - Portfolio

## 🚀 Configuration Requise

### 1. 📱 Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet avec :

```env
# Configuration SMTP Gmail
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

### 2. 🔐 Obtenir un Mot de Passe d'Application Gmail

#### **Étapes :**

1. **Activez l'authentification à 2 facteurs** sur votre compte Google
   - Allez sur [myaccount.google.com](https://myaccount.google.com)
   - Sécurité → Authentification à 2 facteurs → Activer

2. **Générez un mot de passe d'application**
   - Allez dans "Sécurité" → "Mots de passe d'application"
   - Sélectionnez "Mail" et votre appareil
   - Copiez le mot de passe généré (16 caractères)

3. **Utilisez ce mot de passe** dans `GMAIL_APP_PASSWORD`
   - ⚠️ **IMPORTANT** : Utilisez le mot de passe d'application, PAS votre mot de passe Gmail normal

### 3. 🎯 Fonctionnalités du Formulaire

#### **📧 Emails Envoyés :**

1. **Email de notification** (vers votre Gmail)
   - Sujet : "Nouveau message de [Nom] - Portfolio"
   - Contient : Nom, email, message du client
   - Reply-To : Email du client (pour répondre directement)

2. **Email de confirmation** (vers le client)
   - Sujet : "Message reçu - Soufiane HAJJI"
   - Confirmation de réception
   - Design professionnel

#### **🎨 Interface Utilisateur :**

- **Loading state** : Spinner pendant l'envoi
- **Success message** : Confirmation verte
- **Error handling** : Messages d'erreur explicites
- **Form reset** : Champs vidés après succès

### 4. 🔧 Test du Formulaire

#### **Pour tester :**

1. **Démarrez le serveur** : `pnpm dev`
2. **Allez sur** : `http://localhost:3000`
3. **Remplissez le formulaire** de contact
4. **Vérifiez** :
   - Email reçu dans votre Gmail
   - Email de confirmation envoyé au client
   - Messages de statut dans l'interface

### 5. 🛠️ Dépannage

#### **Erreurs Courantes :**

- **"Invalid login"** : Vérifiez `GMAIL_APP_PASSWORD`
- **"Less secure app"** : Activez l'authentification à 2 facteurs
- **"Connection timeout"** : Vérifiez votre connexion internet

#### **Logs de Debug :**

Les erreurs sont loggées dans la console du serveur Next.js.

### 6. 🚀 Déploiement

#### **Variables d'environnement en production :**

- **Vercel** : Ajoutez les variables dans le dashboard
- **Netlify** : Configuration dans les paramètres du site
- **Autres** : Selon votre plateforme de déploiement

### 7. 🔒 Sécurité

#### **Bonnes Pratiques :**

- ✅ Utilisez des mots de passe d'application
- ✅ Ne commitez jamais `.env.local`
- ✅ Limitez l'accès aux emails sensibles
- ✅ Surveillez les tentatives d'envoi

---

## 🎯 Résultat Final

Votre formulaire de contact est maintenant **100% fonctionnel** avec :

- ✅ **Envoi d'emails SMTP Gmail**
- ✅ **Confirmations automatiques**
- ✅ **Interface utilisateur professionnelle**
- ✅ **Gestion d'erreurs complète**
- ✅ **Design responsive**

**Votre portfolio est prêt pour la production !** 🚀✨
