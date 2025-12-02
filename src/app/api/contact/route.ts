import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = 'https://tagi.app.n8n.cloud/webhook/dd985d8d-3f71-4920-bc64-4a89502b0815';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, phone, projectType, message } = body;

    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare data for n8n
    const webhookData = {
      name,
      company: body.company || '',
      email,
      phone,
      projectType,
      message,
      submittedAt: new Date().toISOString(),
      // File information if present
      ...(body.fileName && {
        fileAttached: true,
        fileName: body.fileName,
        fileSize: body.fileSize,
        fileData: body.fileData, // base64 encoded file
      }),
    };

    // Send to n8n webhook
    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    if (!n8nResponse.ok) {
      console.error('n8n webhook error:', await n8nResponse.text());
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
