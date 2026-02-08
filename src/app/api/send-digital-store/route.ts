import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Log the submission for debugging
    console.log('Digital Store Submission Received:', body);

    // In a production environment, you would send an email here
    // using Resend, Nodemailer, etc.

    return NextResponse.json({ 
      success: true, 
      message: 'Richiesta ricevuta correttamente' 
    }, { status: 200 });

  } catch (error) {
    console.error('Error in send-digital-store API:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Errore durante l\'invio della richiesta' 
    }, { status: 500 });
  }
}
