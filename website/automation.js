/**
 * Money Making Machines — Step-by-step automation runner
 *
 * Provides a reusable class to run through step definitions one at a time,
 * updating the UI and writing to a log console. Each step can either:
 *   - run automatically (via its `run` async function), OR
 *   - be skipped and left for the user to do manually.
 *
 * All automation is intentionally transparent: every action is logged with a
 * timestamp so the user can see exactly what is happening.
 */

export class AutomationRunner {
  /**
   * @param {object} opts
   * @param {object[]} opts.steps   Array of step definitions (see below)
   * @param {HTMLElement} opts.logEl  Element to write log lines into
   * @param {HTMLElement} opts.startBtn  The "Start making money" button
   */
  constructor({ steps, logEl, startBtn }) {
    this.steps = steps;
    this.logEl = logEl;
    this.startBtn = startBtn;
    this.running = false;
    this.currentStepIndex = -1;
  }

  log(message, level = 'info') {
    const line = document.createElement('p');
    line.classList.add('log-line', `log-${level}`);
    const ts = new Date().toLocaleTimeString();
    line.textContent = `[${ts}] ${message}`;
    this.logEl.appendChild(line);
    this.logEl.scrollTop = this.logEl.scrollHeight;
  }

  markStepActive(index) {
    const el = document.querySelector(`[data-step="${index}"]`);
    if (!el) {
      return;
    }
    el.classList.remove('done');
    el.classList.add('active');
  }

  markStepDone(index) {
    const el = document.querySelector(`[data-step="${index}"]`);
    if (!el) {
      return;
    }
    el.classList.remove('active');
    el.classList.add('done');
    const num = el.querySelector('.step-number');
    if (num) {
      num.textContent = '✓';
    }
  }

  disableIndividualButtons() {
    document.querySelectorAll('.run-step-btn').forEach((btn) => {
      btn.disabled = true;
    });
  }

  async start() {
    if (this.running) {
      return;
    }
    this.running = true;
    this.logEl.innerHTML = '';
    this.disableIndividualButtons();

    this.startBtn.disabled = true;
    this.startBtn.innerHTML = '<span class="spinner"></span> Running…';

    this.log('🚀 Starting automation…', 'info');

    for (let i = 0; i < this.steps.length; i++) {
      const step = this.steps[i];
      this.currentStepIndex = i;
      this.markStepActive(i);
      this.log(`▶ Step ${i + 1}: ${step.title}`, 'info');

      try {
        await step.run(this);
      } catch (err) {
        this.log(`✗ Error in step ${i + 1}: ${err.message}`, 'error');
        this.log('Automation paused. You can continue manually.', 'warn');
        break;
      }

      this.markStepDone(i);
      this.log(`✔ Step ${i + 1} complete.`, 'info');

      // Small pause between steps so the user can follow along
      await sleep(600);
    }

    this.running = false;
    this.startBtn.disabled = false;
    this.startBtn.innerHTML = '▶ Start making money';
    this.log('✅ All steps finished!', 'info');
  }

  /** Run a single step by index (triggered by individual step button) */
  async runStep(index) {
    if (this.running) {
      return;
    }
    const step = this.steps[index];
    this.logEl.innerHTML = '';
    this.markStepActive(index);
    this.log(`▶ Running step ${index + 1}: ${step.title}`, 'info');
    try {
      await step.run(this);
      this.markStepDone(index);
      this.log(`✔ Step ${index + 1} complete.`, 'info');
    } catch (err) {
      this.log(`✗ Error: ${err.message}`, 'error');
    }
  }
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Tiny helper: simulate a terminal command running (for demo/educational steps) */
export async function simulateCommand(runner, cmd, durationMs = 1200) {
  runner.log(`$ ${cmd}`, 'dim');
  await sleep(durationMs);
}

/** Open a URL in a new tab (with user-intent gate) */
export function openUrl(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}
